# monadLISA
Concepts change according to new understandings.
The importance of establishing the right habitat.

Define NodeJs RunTime.

# The Monadology Leibniz:

The Monad of which we shall here speak, is nothing but a simple substance, which enters into compounds. By 'simple' it means 'without pars'. (Theod. 10)

# Lisa HostCare:

 /dev dir: contains files that represent devices attached to the system:

- **Physical devices:** such as serial ports.
- **Pseudodevices:** such as a random number generator.

# Libraries/Packages in a Monorepo:

Purpose: Developed to be published as standalone npm packages.
Monorepo Role: Shared tooling, easy linking between packages, coordinated versioning, and publishing.
Listing in workspaces: Yes, they should be listed so npm can handle dependencies and linking.

# Applications in a Monorepo:

Purpose: Independent applications that are deployed but not published as npm packages.
Monorepo Role: May share some dependencies with packages, benefit from shared tooling, and can easily update if they depend on local packages within the monorepo.
Listing in workspaces: It depends. If the applications are meant to be completely isolated and do not depend on any local packages within the monorepo, you might choose not to include them in workspaces. If they do depend on local packages, or if you want to take advantage of shared tooling and easier cross-project refactoring, then they should be included.
