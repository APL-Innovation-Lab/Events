
## Project Overview

This document outlines the steps for managing and migrating taxonomy terms within the Drupal Admin UI for a website, focusing on two specific taxonomies: Event Categories and Taglets. Our goal is to streamline these taxonomies by eliminating duplicates and appropriately migrating certain terms from Event Categories to Taglets.

### Objectives

1. **Audit and Clean Up Taxonomies**: Identify and remove or merge duplicate taxonomy terms.
2. **Migrate Terms**: Migrate relevant Event Category terms to Taglets.
3. **Set Original Language**: Ensure that the Original Language for all terms is set to English ("en").

## Pre-Migration Steps

### Accessing Taxonomy Lists

- Event Categories: [Event Categories Overview](https://library.austintexas.gov/admin/structure/taxonomy/manage/event_tags/overview)
- Taglets: [Taglets Overview](https://library.austintexas.gov/admin/structure/taxonomy/manage/taglets/overview)

### 1. Audit Event Categories and Taglets

- **Identify Terms for Migration**: Review the Event Categories list, focusing on terms starting from "- Category" and below. Determine which terms need to be retired or migrated to Taglets.
- **Check for Duplicates in Taglets**: Cross-reference with the Taglets list to identify any duplicates that need to be addressed.

### 2. Plan for Migrations and Mergers

- **Create a Migration Map**: List out which Event Category terms will be migrated to which Taglet terms.
- **Plan for Merging Duplicates**: Decide on a strategy for merging duplicate terms (e.g., which term to keep, which to retire).

### 3. Backup Your Data

- Before making any changes, ensure you have a complete backup of your site and database.

## Migration Process Using Drupal Admin UI

### 1. Migrate Event Category Terms

- Navigate to the Event Categories list.
- For each term identified for migration:
  - Check if a corresponding term exists in Taglets.
  - If it exists, merge the terms following the planned strategy.
  - If it doesn't exist, create a new term in Taglets and retire the Event Category term.

### 2. Merge and Clean Up Duplicate Taglets

- Navigate to the Taglets list.
- Merge or delete duplicate terms as planned.

### 3. Set Original Language

- Ensure each term, both in Event Categories and Taglets, has its Original Language set to "en".

## Post-Migration

### 1. Verify the Migration

- Check that all intended terms have been correctly migrated and that no duplicates remain.
- Ensure all terms have the correct Original Language setting.

### 2. Update Related Content

- Update any content or configurations that were using the old Event Category terms to now use the new Taglet terms.

### 3. Module Development

- Once the manual process is understood and documented, plan for the development of a Drupal module to automate these tasks.

## Conclusion

This README provides a structured approach to managing and migrating taxonomy terms in Drupal. It's crucial to proceed carefully and methodically to ensure data integrity and consistency.
