import * as deepFreeze from 'deepfreeze';

/**
 *
 * Aggregates counters and provide functionalities to work with those
 *
 */
export class CounterList {


    private counters: number[];


    /**
     *
     * Creates a new CouterList
     *
     * @param counters Initial state of the list
     *
     */
    constructor ( counters: number[] = [] ) {
        this.counters = counters;
        this.freeze();
    }


    /**
     *
     * Adds a counter to the list with the specified value
     *
     * @param counter Initial value of the counter
     *
     */
    public addCounter ( counter: number ): number[] {

        this.counters = [
            ...this.counters,
            counter
        ];

        this.freeze();

        return this.getCounters();
    }


    /**
     *
     * Removes the counter on the specified index
     *
     * @param index Index of the counter to be removed
     *
     * @return Updated list of counters
     *
     */
    public removeCounter ( index ): number[] {

        this.counters = this.counters
            .filter( ( counter: number, i: number ) => i !== index );

        this.freeze();

        return this.getCounters();

    }


    /**
     *
     * Increments the counter on the specified index
     *
     * @param index Index of the counter that should be incremented
     *
     * @return Updated list of counters
     *
     */
    public incrementCounter ( index ): number [] {

        this.counters = this.counters
            .map( ( counter: number, i: number ) =>
                ( index === i ) ? ( counter + 1 ): counter
            );

        this.freeze();

        return this.getCounters();

    }


    /**
     *
     * Get the current list of counters
     *
     * @return Current list of counters
     *
     */
    public getCounters () {
        return this.counters;
    }


    /**
     * Freezes the current list to avoid any kind of non pure operation on it
     */
    private freeze () {
        deepFreeze( this.counters );
    }


}
