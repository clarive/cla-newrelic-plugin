# New Relic Plugin

New Relic plugin will allow you to create Policy Alerts from New Relic API remotely from a Clarive instance.

## Requirements

There are no requirements outlined in Clarive in order to work with this plugin.

## Installation

To install the plugin, place the cla-newrelic-plugin folder inside the `CLARIVE_BASE/plugins`
directory in a Clarive instance.

## How to use

Once the plugin is correctly installed, you will have a new palette service called 'Create New Relic Policy Alert', and a new CI for New Relic configuration, called 'NewRelicInstance'.


### NewRelicInstance CI:

You will be able to save your configuration for the New Relic API in this CI. The main fields are:

- **Api Key** -  API key for your New Relic account.


### Create New Relic Alert:

This palette service will let you configure you New Relic settings and the data you want to send.
The main fields are:

- **New Relic CI** - Select the New Relic Instance.
- **Options table** - In this table you need to fill the parameters necessary to create the policy alert.

Configuration example:

    New Relic CI: MyNewRelicInstance
    Options table: 
                   incident_preference: high
                   name: Alert

