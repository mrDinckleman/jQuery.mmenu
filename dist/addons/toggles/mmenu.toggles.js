Mmenu.addons.toggles = function () {
    var _this = this;
    this.bind('initPanels:after', function (panels) {
        //	Refactor toggle classes
        panels.forEach(function (panel) {
            Mmenu.DOM.find(panel, 'input')
                .forEach(function (input) {
                Mmenu.refactorClass(input, _this.conf.classNames.toggles.toggle, 'mm-toggle');
                Mmenu.refactorClass(input, _this.conf.classNames.toggles.check, 'mm-check');
            });
        });
        //	Loop over all panels.
        panels.forEach(function (panel) {
            //	Loop over all toggles and checks.
            Mmenu.DOM.find(panel, 'input.mm-toggle, input.mm-check')
                .forEach(function (input) {
                //	Find the listitem the input is in.
                var parent = input.closest('li');
                //	Get or create an ID for the input.
                var id = input.id || Mmenu.getUniqueId();
                //	Only needs to be done once.
                if (!Mmenu.DOM.children(parent, 'label[for="' + id + '"]').length) {
                    input.id = id;
                    parent.prepend(input);
                    var label = Mmenu.DOM.create('label.mm-' + (input.matches('.mm-toggle') ? 'toggle' : 'check'));
                    label.setAttribute('for', id);
                    var text = Mmenu.DOM.children(parent, '.mm-listitem__text')[0];
                    text.parentElement.insertBefore(label, text.nextSibling);
                }
            });
        });
    });
};
//	Default options and configuration.
Mmenu.configs.classNames.toggles = {
    toggle: 'Toggle',
    check: 'Check'
};
