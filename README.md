# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-ts) and the [TypeScript Configuration](https://github.com/vitejs/vite/tree/main/packages/vite-plugin-react#typescript).

## Running with Docker on AWS EC2 (Red Hat Linux)

To run this application using Docker on an AWS EC2 instance with Red Hat Linux, follow the steps below:

1. **Install Docker**: 
   Follow the official Docker installation guide for Red Hat Linux [here](https://docs.docker.com/engine/install/rhel/).

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/lahiruCirclebook/weather_app_react.git
   cd weather_app_react

3. **Build the Docker Image**:
docker build -t weather_app_react .

4. **Run the Docker Container**:
docker run -d -p 3000:3000 weather_app_react

Next, you can update the README.md file in your repository with this new content.
