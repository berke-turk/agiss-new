declare global {
    interface Window {
        gizleGoster?: (id: string) => void;
        myFunction?: () => void;
        urunler?: () => void;
        gizle?: (id: string) => void;
        gorselDegistir?: (value: number) => void;
        gorselleriGezin?: (value: number) => void;
    }
}

export {};