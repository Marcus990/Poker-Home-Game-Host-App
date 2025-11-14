.PHONY: install run lint format test clean

install:
	pip install -r requirements.txt
	pip install black ruff

run:
	uvicorn main:app --reload

lint:
	ruff check .

format:
	black .
	ruff check . --fix

test:
	# Add tests here when ready
	echo "Tests not yet implemented"

clean:
	find . -type d -name __pycache__ -exec rm -r {} +
	find . -type f -name "*.pyc" -delete

