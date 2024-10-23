const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 42007 });

const clients = new Set();
const gameState = {
    ball: { x: 400, y: 200 },
    ballVelocity: { x: 0, y: 0 },
    ballAngularVelocity: 0,
    ballAngle: 0,
    players: {},
    // Add rope segments state
    ropeSegments: Array(32).fill().map(() => ({
        position: { x: 0, y: 0 },
        velocity: { x: 0, y: 0 },
        angle: 0,
        angularVelocity: 0
    }))
};

let hostId = null;

// Add these constants at the top
const TICK_RATE = 60;
const TICK_INTERVAL = 1000 / TICK_RATE;

let serverTime = 0;

function assignNewHost() {
    // Get first available client as host
    for (const client of clients) {
        hostId = client.clientId;
        console.log(`New host assigned: ${hostId}`);
        // Notify all clients about the new host
        broadcastGameState();
        break;
    }
}

function broadcastGameState() {
    const gameStateMsg = JSON.stringify({
        type: 'gameState',
        gameState,
        hostId,
        serverTime,
        timestamp: Date.now(),
    });
    
    for (const client of clients) {
        client.send(gameStateMsg);
    }
}

// Add server tick
setInterval(() => {
    serverTime += TICK_INTERVAL;
    broadcastGameState();
}, TICK_INTERVAL);

server.on('connection', (ws) => {
    const clientId = Math.random().toString(36).substr(2, 9);
    clients.add(ws);
    ws.clientId = clientId;
    
    // Assign as host if first player
    if (!hostId) {
        hostId = clientId;
        console.log(`First player connected. Host assigned: ${hostId}`);
    }
    
    console.log(`Client connected: ${clientId} (Total clients: ${clients.size})`);
    
    // Send initial state and client ID
    ws.send(JSON.stringify({
        type: 'init',
        clientId,
        hostId,
        gameState
    }));

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        
        if (data.type === 'playerUpdate') {
            gameState.players[data.clientId] = data.position;
        } else if (data.type === 'ballUpdate' && ws.clientId === hostId) {
            gameState.ball = data.position;
            gameState.ballVelocity = data.velocity;
            gameState.ballAngularVelocity = data.angularVelocity;
            gameState.ballAngle = data.angle;
            // Add rope segments update
            gameState.ropeSegments = data.ropeSegments;
        }
    });

    ws.on('close', () => {
        console.log(`Client disconnected: ${ws.clientId}`);
        clients.delete(ws);
        delete gameState.players[ws.clientId];
        
        // Reassign host if the host disconnected
        if (ws.clientId === hostId) {
            console.log('Host disconnected, reassigning...');
            hostId = null;
            assignNewHost();
        }
        
        broadcastGameState();
    });
});

console.log(`WebSocket server started on port ${server.options.port}`);
