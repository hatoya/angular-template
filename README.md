# Angular Template

## Development Server

Run `npm start` for a dev server. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the source files.

## Git Flow

```mermaid
sequenceDiagram
  master ->> develop: checkout
  develop ->> release/202201: checkout
  develop ->> feature/issue1: checkout
  feature/issue1 ->> feature/issue1: commit
  feature/issue1 ->> release/202201: merge
  develop ->> feature/issue2: checkout
  feature/issue2 ->> feature/issue2: commit
  feature/issue2 ->> release/202201: merge
  release/202201 ->> develop: merge
  develop ->> master: merge
```
