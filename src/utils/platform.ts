export const isNativeApp = (): boolean => {
    return (
        !!(window as any).Capacitor?.isNative ||
        !!(window as any).Capacitor?.platform
    );
};
