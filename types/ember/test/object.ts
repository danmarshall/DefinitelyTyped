import Ember from 'ember';

const LifetimeHooks = Ember.Object.extend({
    resource: null as {} | null,

    init() {
        this._super();
        this.resource = {};
    },

    willDestroy() {
        delete this.resource;
        this._super();
    }
});

class MyObject30 extends Ember.Object {
    constructor() {
        super();
    }
}

class MyObject31 extends Ember.Object {
    constructor(properties: object) {
        super(properties);
    }
}

class Foo extends Ember.Object.extend({
    a: Ember.computed({
        get() { return ''; },
        set(key: string, newVal: string) { return ''; }
    })
}) {
    b = 5;
    baz() {
        let y = this.b; // $ExpectType number
        let z = this.a; // $ExpectType ComputedProperty<string, string>
        this.b = 10;
        this.get('b').toFixed(4); // $ExpectType string
        this.set('a', 'abc').split(','); // $ExpectType string[]
        this.set('b', 10).toFixed(4); // $ExpectType string

        this.setProperties({ b: 11 });
        // this.setProperties({ b: '11' }); // $ExpectError
        this.setProperties({
            a: 'def',
            b: 11
        });
    }
}

export class Foo2 extends Ember.Object {
  name!: string;

  changeName(name: string) {
    let a: string = this.set('name', name);
    let b: number = this.set('name', name); // $ExpectError
    let x: string = Ember.set(this, 'name', name);
    let y: number = Ember.set(this, 'name', name); // $ExpectError
    this.setProperties({
        name
    });
    Ember.setProperties(this, {
        name
    });
  }
}
