var reg = require('cla/reg');

reg.register('service.newrelic.alerts', {
    name: 'Create New Relic Policy Alert',
    icon: '/plugin/cla-newrelic-plugin/icon/newrelic.svg',
    form: '/plugin/cla-newrelic-plugin/form/newrelic-call-form.js',
    handler: function(ctx, params) {
        var ci = require("cla/ci");
        var log = require('cla/log');
        var web = require("cla/web");

        var agent = web.agent();
        var options = params.options || "";
        var newRelicCi = ci.findOne({
            mid: params.newRelicCi + ''
        });

        var apiKey = newRelicCi.apiKey || "";
        var headers = {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        };

        var content = {
            'policy': options
        }

        agent.post('https://api.newrelic.com/v2/alerts_policies.json', {
            headers: headers,
            content: JSON.stringify(content)
        });

        log.info(_("Alert policy created"));

        return;
    }
});