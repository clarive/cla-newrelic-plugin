(function(params) {


    var apiKey = Cla.ui.textField({
        name: 'apiKey',
        fieldLabel: _('Api Key'),
        value: params.rec.apiKey || ''
    });

    return [
        apiKey
    ];
})
