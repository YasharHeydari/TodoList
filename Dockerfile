FROM mcr.microsoft.com/dotnet/core/aspnet:2.1 AS base
WORKDIR /app
EXPOSE 44344

FROM mcr.microsoft.com/dotnet/core/sdk:2.1 AS build
# Copy csproj and restore as distinct layers
WORKDIR /src
COPY todos.sln ./
COPY Todos.DAO/*.csproj ./Todos.DAO/
COPY Todos.DomainModel/*.csproj ./Todos.DomainModel/
COPY Todos.Service/*.csproj ./Todos.Service/
COPY Todos.Web/*.csproj ./Todos.Web/

RUN dotnet restore

# Copy everything else and build
COPY . ./
WORKDIR /src/Todos.DomainModel
RUN dotnet publish -c Release -o /app/out
WORKDIR /src/Todos.DAO
RUN dotnet publish -c Release -o /app/out
WORKDIR /src/Todos.Service
RUN dotnet publish -c Release -o /app/out
WORKDIR /src/Todos.Web
RUN dotnet publish -c Release -o /app/out

# Build runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/out .
ENTRYPOINT ["dotnet", "WebAPIProject.dll"]