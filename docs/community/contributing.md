---
title: Contributing
sidebar_position: 1
description: How to contribute to the openDesk Edu OpenSpec documentation.
---

# Contributing to the OpenSpec

Thank you for your interest in improving the openDesk Edu OpenSpec! This page explains how to contribute effectively.

## Ways to Contribute

### 1. Improve Existing Specifications

- Fix typos, unclear language, or formatting issues
- Add missing requirements or scenarios
- Update outdated information
- Improve examples

### 2. Add New Specifications

- New service specifications
- New platform specifications
- New integration specifications

### 3. Improve Tooling

- Enhance the self-improvement agent
- Add new audit rules
- Improve automation

## Contribution Workflow

### Step 1: Identify an Issue

- Browse the [Test Coverage Gaps](/docs/registry/test-coverage-gaps)
- Check [GitHub Issues](https://github.com/opendesk-edu/opendesk-edu/issues)
- Review the [Service Gap Analysis](https://github.com/opendesk-edu/landscape.opendesk-edu.org/blob/main/docs/SERVICE_GAP_ANALYSIS.md)

### Step 2: Fork and Clone

```bash
# Fork the repository on GitHub
git clone https://github.com/YOUR-USERNAME/opendesk-edu.git
cd opendesk-edu
```

### Step 3: Create a Branch

```bash
git checkout -b feature/improve-moodle-spec
```

### Step 4: Make Changes

Edit the relevant spec file in `openspec/specs/`. Follow the [Methodology](/docs/methodology) guidelines.

### Step 5: Validate

```bash
# Run the self-improvement agent
cd .gitlab/self-improvement
python3 improvement_agent.py
```

### Step 6: Commit and Push

```bash
git add openspec/specs/services/moodle/spec.md
git commit -m "docs: improve Moodle specification with clearer SLO targets"
git push origin feature/improve-moodle-spec
```

### Step 7: Open Pull Request

Open a PR on GitHub with:
- Clear description of changes
- Reference to any related issues
- Before/after examples (if applicable)

## Specification Standards

### Format

All specs follow the Fission AI OpenSpec format:

```markdown
## Purpose
[What the system does and why]

## Scope
### In Scope
- [Features]
### Out of Scope
- [Exclusions]

## Requirements
### Functional Requirements
#### Scenario: [Use case]
- GIVEN [precondition]
- WHEN [action]
- THEN [expected outcome]

## Depends On
- [Service]: [Purpose]

## SLO
- Availability: 99.9%
- Latency P95: <100ms
- Error rate: <0.1%

## Disaster Recovery
- RPO: 15 minutes
- RTO: 1 hour
- Backup strategy: [Details]
```

### Quality Guidelines

✅ **DO**:
- Be specific and measurable
- Use BDD-style scenarios
- Include both happy and error paths
- Reference related specs
- Keep examples realistic
- Update regularly

❌ **DON'T**:
- Use vague language
- Skip the Out of Scope section
- Forget to update SLOs
- Leave TODOs in committed specs
- Make specs too long (split if needed)

## Review Process

1. **Automated Checks**:
   - Self-improvement agent runs weekly
   - Detects missing sections
   - Validates cross-references
   - Checks consistency

2. **Peer Review**:
   - At least one maintainer review required
   - Community input welcome
   - Technical accuracy verified

3. **Testing**:
   - Specs are reviewed against actual implementation
   - SLOs validated against production metrics
   - DR procedures tested in staging

## Community

- 💬 [GitHub Discussions](https://github.com/opendesk-edu/opendesk-edu/discussions)
- 🐛 [Issue Tracker](https://github.com/opendesk-edu/opendesk-edu/issues)
- 📧 [Mailing List](mailto:opendesk-edu@example.com)
- 🌐 [opendesk-edu.org](https://opendesk-edu.org)

## Code of Conduct

All contributors must follow our [Code of Conduct](https://github.com/opendesk-edu/opendesk-edu/blob/main/CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).
