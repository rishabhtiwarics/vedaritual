import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      tag: "Botanical Oil",
      name: "Ashwagandha Gold",
      price: 1850,
      image: "/images/product/1.jfif",
      category: "Stress Relief"
    },
    {
      id: 2,
      tag: "Face Elixir",
      name: "Saffron Glow",
      price: 2450,
      image: "/images/product/2.jfif",
      category: "Skin Care"
    },
    {
      id: 3,
      tag: "Herbal Tea",
      name: "Brahmi Focus",
      price: 950,
      image: "/images/product/3.jfif",
      category: "Cognitive"
    },
    {
      id: 4,
      tag: "Bath Salts",
      name: "Neem Purify",
      price: 1250,
      image: "/images/product/4.jfif",
      category: "Body Care"
    },
    {
      id: 5,
      tag: "Face Mist",
      name: "Rose Water",
      price: 750,
      image: "/images/product/5.jfif",
      category: "Skin Care"
    },
    {
      id: 6,
      tag: "Hair Oil",
      name: "Bhringraj Vital",
      price: 1550,
      image: "/images/product/6.jfif",
      category: "Hair Care"
    }
  ],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
