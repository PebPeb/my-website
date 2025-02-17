# Use a base image with Java installed
FROM openjdk:23-jdk-slim

RUN apt-get update && \
  apt-get install -y maven && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the Maven build file (pom.xml) and source code into the container
COPY ./website/src src 
COPY ./website/pom.xml pom.xml

# Install Maven dependencies and build the project
# RUN mvn clean install -DskipTests
RUN mvn clean install

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the application
CMD ["java", "-jar", "target/website-0.0.1-SNAPSHOT.jar"]
