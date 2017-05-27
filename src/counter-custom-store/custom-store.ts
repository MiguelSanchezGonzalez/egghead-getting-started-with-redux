export class Store {

    private state: any;

    private subscriptions;

    private reducer;


    constructor ( reducer ) {
        this.subscriptions = [];
        this.reducer = reducer;
        this.state = this.reducer( this.state, {} );
    }

    public dispatch ( action ) {
        this.state = this.reducer( this.state, action );
        this.subscriptions.forEach( subscription => subscription() );
    }

    public getState() {
        return this.state;
    }

    public subscribe ( subscription ) {
        this.subscriptions = [
            ...this.subscriptions,
            subscription
        ]

        return () => {
            this.subscriptions = this.subscriptions
                .filter( s => s !== subscription );
        };

    }


}
