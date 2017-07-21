(function(params) {

    var newRelicCiCombo = Cla.ui.ciCombo({
        name: 'newRelicCi',
        class: 'NewRelicInstance',
        fieldLabel: 'New Relic CI',
        value: params.data.newRelicCi || '',
        allowBlank: false
    });


    var optionsHash = Cla.ui.dataEditor({
        name: 'options',
        title: _('Options table'),
        hide_save: true,
        hide_cancel: true,
        hide_type: true,
        height: 500,
        data: params.data.options || {
            'incident_preference': 'string',
            'name': 'string',
        }
    });

    return [
        newRelicCiCombo,
        optionsHash
    ];
})