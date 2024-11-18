# Makefile

APP_NAME=cms-backend
CONTAINER_NAME=cms-backend-container
PORT=5000

# Run Backend
run-backend:
	@echo "Building Docker image..."
	@docker build -t $(APP_NAME) .
	@echo "Stopping existing Docker container (if any)..."
	@docker stop $(CONTAINER_NAME) || true
	@docker rm $(CONTAINER_NAME) || true
	@echo "Running Docker container..."
	@docker run -d -p $(PORT):$(PORT) --name $(CONTAINER_NAME) $(APP_NAME)
	@echo "Displaying Docker logs..."
	@sleep 2 # Give some time for the server to start
	@docker logs -f $(CONTAINER_NAME)

# Stop Container
stop-backend:
	@docker stop $(CONTAINER_NAME) || true
	@docker rm $(CONTAINER_NAME) || true

# Clean Docker Images
clean:
	@docker rmi $(APP_NAME) || true
	@docker system prune -f || true
