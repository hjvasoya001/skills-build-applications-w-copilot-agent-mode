# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey hjvasoya001!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/hjvasoya001/skills-build-applications-w-copilot-agent-mode/issues/1)

## OctoFit Frontend Environment

The frontend uses a Vite variable to target the Codespaces backend URL.

- Define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local`.
- Example:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, the frontend calls:

`https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/...`

When it is not set, the frontend safely falls back to:

`http://localhost:8000/api/...`

