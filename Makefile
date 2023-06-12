deps:
	pip3 install -U academic

bib:
	academic import --bibtex content/publications/publications.bib --publication-dir content/publications

dev:
	hugo server -D
