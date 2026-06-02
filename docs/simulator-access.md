# Simulator Access

The public simulator can replay canned telemetry frames without connecting to
Orbital Command.

## Fixture accounts

```ini
SIM_READER_USERNAME=telemetry_reader
SIM_READER_PASSWORD=ReplayOnly2025
SIM_ARCHIVE_TOKEN=public-simulator-token
```

These values authenticate only to the local simulator harness. They are not
valid crew portal credentials.

## Search hints for maintainers

Before publishing, search for:

```text
password
token
temporary
smoke test
```
