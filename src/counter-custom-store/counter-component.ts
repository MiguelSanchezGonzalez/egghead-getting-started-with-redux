
export class CounterComponent {

    public onIncrementClick: () => void;
    public onDecrementClick: () => void;

    private count: number;
    private $count: ShadowRoot;


    constructor ( count: number ) {
        this.count = count;
        this.render();
    }


    public setCount ( count: number ) {
        this.count = count;
        this.$count.innerHTML = `${this.count}`;
    }


    private render () {
        const parent = document.getElementById( 'app' );

        // Counter display
        const $count = document.createElement( 'div' );
        $count.id = 'counter';
        parent.appendChild( $count );
        this.$count = $count.attachShadow( { mode: 'open' } );

        // Buttons
        const $increment: HTMLButtonElement = document.createElement( 'button' );
        const $decrement: HTMLButtonElement = document.createElement( 'button' );

        $increment.innerText = '+';
        $increment.addEventListener( 'click', () => this.onIncrementClick() );

        $decrement.innerText = '-';
        $decrement.addEventListener( 'click', () => this.onDecrementClick() );

        parent.appendChild( $increment );
        parent.appendChild( $decrement );
    }

}
