FROM python:3.11.9-alpine3.20

COPY . /project
WORKDIR /project

# Install necessary packages
RUN apk add --no-cache gcc libc-dev libffi-dev git curl

# Install PDM 
RUN rm -f pdm.lock
RUN pip install -U pdm
RUN pdm install --prod --no-self

# Set the working directory to /project and expose port 3000
EXPOSE 80

# Run the application
CMD ["pdm", "run", "uvicorn", "main:app", "--reload"]
