# monadLISA
Concepts change according to new understandings.
The importance of establishing the right habitat: Define NodeJs RunTime.

# The Monadology Leibniz:
The Monad of which we shall here speak, is nothing but a simple substance, which enters into compounds. By 'simple' it means 'without pars'. (Theod. 10)

# Lisa HostCare:
 /dev dir: contains files that represent devices attached to the system:

- **Physical devices:** such as serial ports.
- **Pseudodevices:** such as a random number generator.

# Apps/EndPoints/Packages in a Monorepo:

### Packages:
**Purpose:** Developed to be published as standalone npm packages, apps or endpoints.
**Monorepo Role:** Shared tooling, easy linking between packages, coordinated versioning, and publishing.

### Applications in a Monorepo:
**Purpose:** Independent applications that are deployed but not published as npm packages.
**Monorepo Role:** Dependencies with packages, benefit from shared tooling, and can easily update within the monorepo.

### EndPoints
**Purpose:** Endpoints in a monorepo typically represent the server-side logic, API surfaces, or services that handle requests and business logic, and serve as a backend to your applications (UIs).
**Monorepo Role:**
- **Unified Architecture**: Having endpoints within the same monorepo as your apps and packages allows for a unified architectural approach. This setup ensures that all components of your system are aligned in terms of design patterns, coding standards, and security practices.
- **Interdependency Management**: Since endpoints often rely on shared packages for common functionalities (like authentication, database access, etc.), a monorepo setup simplifies dependency management. Any changes in shared packages can be immediately reflected and tested in the endpoints.
- **Streamlined Development Workflow**: Developers can work across the full stack (UI, backend, and shared libraries) within a single repository. This reduces context switching and improves productivity.
- **Coordinated Testing and CI/CD**: Endpoints in the monorepo benefit from shared testing frameworks and continuous integration/continuous deployment pipelines. This helps maintain high code quality and ensures that changes in one part of the system do not adversely affect other parts.
- **Easier Local Development**: Developers can run and test the full stack locally, including apps communicating with their corresponding endpoints, which is crucial for rapid development and debugging.

This structure supports a modular but integrated approach to developing a full-stack solution.
