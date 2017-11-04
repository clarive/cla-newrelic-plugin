var ci = require("cla/ci");

ci.createRole("NewRelic");

ci.createClass("NewRelicInstance", {
    icon: '/plugin/cla-newrelic-plugin/icon/newrelic.svg',
    form: '/plugin/cla-newrelic-plugin/form/newrelic-ci-form.js',
    roles: ["NewRelic", "ClariveSE"],
    has: {
        apiKey: {
            is: "rw",
            isa: "Str",
            required: true
        }
    }

});
