# New Relic Plugin

<img src="https://cdn.rawgit.com/clarive/cla-newrelic-plugin/master/public/icon/newrelic.svg?sanitize=true" alt="New Relic Plugin" title="New Relic Plugin" width="120" height="120">

New Relic plugin will allow you to create Policy Alerts from New Relic API remotely from a Clarive instance.

## Requirements

There are no requirements outlined in Clarive in order to work with this plugin.

## Installation

To install the plugin, place the `cla-newrelic-plugin` folder inside the `$CLARIVE_BASE/plugins`
directory in a Clarive instance.

### NewRelicInstance Resource

To configurate the NewRelicInstance Resource open:

In **Clarive SE**: Resources -> ClariveSE.

In **Clarive EE**: Resources -> NewRelic.

You will be able to save your configuration for the New Relic API in this Resource. The main fields are:

- **API Key** -  API key for your New Relic account.

## Service configuration

### Parameters

The main fields are:

- **New Relic Resource (variable name: newrelic_rc)** - Select the New Relic Instance.
- **Options table (options)** - In this table you need to fill the parameters necessary to create the policy alert.

## How to use

### In Clarive EE

Once the plugin is placed in its folder, you can find this service in the palette in the section of generic service and can be used like any other palette op.

Op Name: **Create New Relic Policy Alert**

Example:

```yaml
    New Relic CI: MyNewRelicInstance
    Options table: 
                   incident_preference: high
                   name: Alert
``` 

### In Clarive SE

#### Rulebook

If you want to use the plugin through the Rulebook, in any `do` block, use this ops as examples to configure the different parameters:

```yaml
rule: New Relic demo
do:
   - newrelic_alert: 
        newrelic_rc: 'newrelic_resource'
        options: {
                    'incident_preference': 'High',
                    'name': 'Alert'
                }  
```

##### Outputs

###### Success

The service will return the console output for the command.

###### Possible configuration failures

**Invalid API Key**

Check you set the correct API key in the New Relic Resource.

**Variable required**

```yaml
Error in rulebook (compile): Required argument(s) missing for op "newrelic_alert": "newrelic_rc"
```

Make sure you have all required variables defined.

**Not allowed variable**

```yaml
Error in rulebook (compile): Argument `NewRelic` not available for op "newrelic_alert"
```

Make sure you are using the correct paramaters (make sure you are writing the variable names correctly).

## More questions?

Feel free to join **[Clarive Community](https://community.clarive.com/)** to resolve any of your doubts.