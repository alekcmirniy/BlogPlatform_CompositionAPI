type pausedParams = { isPaused: boolean, elapsedMs: number, lastStartedTime: number }
const DEFAULT_PAUSE_PARAMS: pausedParams = { isPaused: false, elapsedMs: 0, lastStartedTime: 0 };

export class Repeater {
    private static _instance: Repeater;

    private interval: NodeJS.Timeout | null;
    private timeoutOfRestoring: NodeJS.Timeout | null;

    private pausedParams: pausedParams;

    private repeatingTime: number;
    private func: (args?: string[]) => any;

    private constructor(repeatingTime: number, func: (args?: string[]) => any) {
        this.repeatingTime = repeatingTime;
        this.func = func;

        this.interval = null;
        this.timeoutOfRestoring = null;
        this.pausedParams = { ...DEFAULT_PAUSE_PARAMS };
    }

    public start = (immediate?: boolean) => {
        if (!this.interval) {
            if (immediate) this.immediateExecute();
            this.interval = setInterval(this.func, this.repeatingTime);

        }
        else if (this.pausedParams.isPaused) {
            const elapsedMs = this.pausedParams.elapsedMs;
            this.pausedParams = { ...DEFAULT_PAUSE_PARAMS };

            this.timeoutOfRestoring = setTimeout(() => {
                if (immediate) this.immediateExecute();
                this.interval = setInterval(this.func, this.repeatingTime);
            }, this.repeatingTime - elapsedMs);

        }
        else if (this.interval && !this.pausedParams.isPaused) {
            clearInterval(this.interval);
            if (immediate) this.immediateExecute();
            this.interval = setInterval(this.func, this.repeatingTime);
        }
        this.pausedParams.lastStartedTime = performance.now();
        console.log('SUCCESSFULLY STARTED');
    }

    public pause = () => {
        if (this.pausedParams.isPaused) {
            console.log('ALREADY PAUSED!');
            return;
        }
        const elapsedMs = (this.pausedParams.lastStartedTime > 0) ? ((performance.now() - this.pausedParams.lastStartedTime) % this.repeatingTime) : 1000;
        this.pausedParams = { ...this.pausedParams, isPaused: true, elapsedMs: elapsedMs };
        if (this.interval) clearInterval(this.interval);
        console.log('SUCCESSFULLY PAUSED');
    }

    public stop = () => {
        if (this.interval) clearInterval(this.interval);
        if (this.timeoutOfRestoring) clearTimeout(this.timeoutOfRestoring);
        this.pausedParams = { ...DEFAULT_PAUSE_PARAMS };
        console.log('SUCCESSFULLY STOPPED');
    }

    public immediateExecute = () => {
        this.func();
        console.log('SUCCESSFULLY EXECUTED IMMEDIATELY');
    }

    public static getInstance(): Repeater | undefined {
        return this._instance ?? undefined;
    }

    public static createInstance(repeatingTime: number, func: (args?: string[]) => void) {
        this._instance = new Repeater(repeatingTime, func);
    }
}