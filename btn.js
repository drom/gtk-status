#!/usr/bin/gjs
'use strict';

imports.gi.versions.Gtk = '4.0';

const {
    Application,
    ApplicationWindow,
    Box,
    CenterBox,
    Button
} = imports.gi.Gtk;


const app = new Application({ application_id: 'org.gtk.Status' });

app.connect('activate', () => {
    const win = new ApplicationWindow({ application: app });

    const btn1 = new Button({ label: 'Btn1' });
    btn1.connect('clicked', () => { log('B1'); });

    const btn2 = new Button({ label: 'Btn2' });
    btn2.connect('clicked', () => { log('B2'); });

    const bx1 = new Box();
    bx1.append(btn1);
    bx1.append(btn2);
    win.set_child(bx1);
    win.set_title('btns');
    win.present();
});

app.run([]);
