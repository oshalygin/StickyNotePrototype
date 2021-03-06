(function () {
    $(document).ready(function () {

        $.fn.postitall.globals = {
            prefix: '#PIApostit_',
            filter: 'domain',
            savable: false,
            randomColor: false,
            toolbar: true,
            autoHideToolBar: false,
            removable: true,
            askOnDelete: false,
            draggable: true,
            resizable: false,
            editable: true,
            changeoptions: false,
            blocked: false,
            minimized: true,
            expand: false,
            fixed: false,
            addNew: true,
            showInfo: false,
            pasteHtml: false,
            htmlEditor: false,
            autoPosition: true,
            addArrow: 'back'
        };

        $.fn.postitall.defaults = {
            id: "",
            created: Date.now(),
            domain: window.location.origin,
            page: window.location.pathname,
            osname: navigator.appVersion,
            content: '',
            position: 'absolute',
            posX: '0',
            posY: '0',
            right: '',
            height: 200,
            width: 160,
            minHeight: 100,
            minWidth: 100,
            oldPosition: {},
            style: {
                tresd: true,
                backgroundcolor: '#ffc',
                textcolor: '#333333',
                textshadow: true,
                fontfamily: 'verdana',
                fontsize: 'small',
                arrow: 'none',
            },
            features: $.fn.postitall.globals,
            flags: {
                blocked: false,
                minimized: false,
                expand: false,
                fixed: false,
                highlight: false,
            },

            attachedTo: {
                element: '',
                position: 'right',
                fixed: true,
                arrow: true,
            },
            onCreated: function (id, options, obj) {
            },
            onChange: function (id) { return undefined; },
            onSelect: function (id) { return undefined; },

            onDblClick: function (id) {
                var alreadyFlipped = $(id).hasClass("flip");
                if (alreadyFlipped) {
                    $(id).removeClass("flip centered");
                } else {
                    $(id).addClass("flip centered");
                }
            },

            onRelease: function (id) { return undefined; },
            onDelete: function (id) { return undefined; }
        };


    });

})();