
# Import Events Module for Drupal

## Overview

The "Import Events" module is designed to facilitate the importation of events into your Drupal site from a JSON file using the Migrate and Migrate File modules. This document outlines the steps required to install and use this custom module, manage its configuration, and handle event data importation.

## Installation

To install the "Import Events" module, follow these steps:

1. **Enable the Module:**
   - Use Drupal's interface or the Drush command line tool to enable the "Import Events" module. Upon enabling, Drupal should automatically copy the necessary configuration files from the module's `config/install` directory into the system.

2. **Verify Configuration:**
   - If the configuration files do not seem to be imported automatically, you may need to manually import them:
     1. Export the current configuration to establish a baseline with `drush cex`.
     2. Import the module's configuration with `drush cim`, ensuring the migration configuration has been added to the config directory.

## Managing the JSON File

The module imports event data from a JSON file located at `artifacts/import_events.json`. Follow these steps to manage this file:

1. **Initial Copy:**
   - When the module is first enabled, Drupal attempts to copy the JSON file to `public://import_events/import_events.json`. If this does not happen automatically, or for subsequent imports, the file will need to be managed manually.

2. **Manual Management:**
   - To manually load or update the JSON file, place it into the `import_events` directory within the site's public folder.

## Running the Migration

Execute the migration with the following Drush command:

```sh
drush migrate:import import_events
```

### Additional Commands

- **Rollback Migration:**
  To rollback the migration, use:
  ```sh
  drush migrate:rollback import_events
  ```

- **Check Migration Status:**
  To check the status of the migration, use:
  ```sh
  drush migrate:status import_events
  ```

## Troubleshooting

- Ensure that the Migrate and Migrate File modules are installed and enabled.
- Verify that the JSON file is correctly placed in the `public://import_events` directory for the migration to detect and import it.
- For configuration issues, re-export and re-import configurations as described in the installation section.

## Conclusion

This module simplifies the process of importing event data into Drupal sites. By following the steps outlined above, you can manage the module's installation, configuration, and the event data importation process.
