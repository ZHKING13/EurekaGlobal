import { create } from 'zustand';

// Fonction utilitaire pour éviter les doublons
const addItemWithoutDuplicates = (items, newItem) => {
    console.log(newItem);
    if (items.find(item => item.id === newItem.id)) {
        return items; // Retourne les items existants si l'item existe déjà
    }
    return [...items, newItem]; // Ajoute le nouvel item sinon
};

const useStore = create((set) => ({
    products: [],
    formations: [],
    showDrawer: false,
    // changer l'etat du drawer
    toggleDrawer: () => set((state) => ({
        showDrawer: !state.showDrawer
    })),
    // Fonction pour ajouter un produit
    addProduct: (item) => set((state) => ({
        products: addItemWithoutDuplicates(state.products, item)
    })),

    // Fonction pour supprimer un produit par son ID
    removeProduct: (id) => set((state) => ({
        products: state.products.filter(product => product.id !== id)
    })),

    // Fonction pour ajouter une formation
    addFormation: (item) => set((state) => ({
        formations: addItemWithoutDuplicates(state.formations, item)
    })),

    // Fonction pour supprimer une formation par son ID
    removeFormation: (id) => set((state) => ({
        formations: state.formations.filter(formation => formation.id !== id)
    })),
    resetAll: () => set({ products: [], formations: [] }),
}));


export default useStore;