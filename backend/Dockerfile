# Use the official .NET SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy project files and restore dependencies
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the project and build it
COPY . ./
RUN dotnet publish -c Release -o out

# Use a lightweight runtime image for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Expose the port used by the API
EXPOSE 5000
ENTRYPOINT ["dotnet", "backend.dll"]
