define('spinner', ['jquery'], function($) {
    function Spinner(o) {
        if (o) {
            $.extend(true, this, o);
        }
    }
    Spinner.prototype = {
        speed: 200,
        spinning: false,
        callback: function(){},
        random: true,
        start: function(callback) {
            if (typeof callback !== 'function' && this.callback !== 'function') {
                throw new Error('Spinner.start requires a callback function');
            }
            this.callback = callback;
            this.spinning = true;
            this.spin();

            return this;
        },
        stop: function() {
            this.spinning = false;

            return this;
        },
        spin: function() {
            if (!this.spinning) { return; }

            this.callback(this.getChar());

            var self = this;
            setTimeout(function() {
                self.spin();
            }, this.speed);

            return this;
        },
        getChar: function() {
            if (this.random) {
                return this.characters[Math.floor(Math.random()*this.characters.length)];
            } else {
                if (isNaN(this.i) || this.i > this.characters.length) {
                    this.i = -1;
                }
                this.i += 1;
                return this.characters[this.i];
            }

            return this;
        },
        characters: '⠁⠃⠇⠏⠟⠿⡿⣿⢿⡟⣟⢟⠯⡯⣯⢯⡏⣏⢏⠗⠷⡷⣷⢷⡗⣗⢗⠧⡧⣧⢧⡇⣇⢇⠋⠛⠻⡻⣻⢻⡛⣛⢛⠫⡫⣫⢫⡋⣋⢋⠓⠳⡳⣳⢳⡓⣓⢓⠣⡣⣣⢣⡃⣃⢃⠅⠍⠝⠽⡽⣽⢽⡝⣝⢝⠭⡭⣭⢭⡍⣍⢍⠕⠵⡵⣵⢵⡕⣕⢕⠥⡥⣥⢥⡅⣅⢅⠉⠙⠹⡹⣹⢹⡙⣙⢙⠩⡩⣩⢩⡉⣉⢉⠑⠱⡱⣱⢱⡑⣑⢑⠡⡡⣡⢡⡁⣁⢁⠂⠆⠎⠞⠾⡾⣾⢾⡞⣞⢞⠮⡮⣮⢮⡎⣎⢎⠖⠶⡶⣶⢶⡖⣖⢖⠦⡦⣦⢦⡆⣆⢆⠊⠚⠺⡺⣺⢺⡚⣚⢚⠪⡪⣪⢪⡊⣊⢊⠒⠲⡲⣲⢲⡒⣒⢒⠢⡢⣢⢢⡂⣂⢂⠄⠌⠜⠼⡼⣼⢼⡜⣜⢜⠬⡬⣬⢬⡌⣌⢌⠔⠴⡴⣴⢴⡔⣔⢔⠤⡤⣤⢤⡄⣄⢄⠈⠘⠸⡸⣸⢸⡘⣘⢘⠨⡨⣨⢨⡈⣈⢈⠐⠰⡰⣰⢰⡐⣐⢐⠠⡠⣠⢠⡀⣀⢀'
    }

    return Spinner;
});