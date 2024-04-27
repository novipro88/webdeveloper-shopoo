"use client";

import React, { useState } from "react";
import { Plus, TagsIcon, X } from "lucide-react";

export default function ArrayItemsInput({ items = [], setItems, itemTitle }) {
  const [item, setItem] = useState("");
  const [showItemForm, setShowItemForm] = useState(false);
  function addItem() {
    if (!item) return;
    setItems([...items, item]);
    setItem("");
  }
  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className="sm:col-span-2">
      {showItemForm ? (
        <div className="flex items-center">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <TagsIcon className="w-5 h-5" />
            </div>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
              placeholder={`Create ${itemTitle}`}
            />
          </div>
          <button
            onClick={addItem}
            type="button"
            className="shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-lime-700 rounded-lg border border-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            <Plus className="w-4 h-4 me-2" />
            Add
          </button>
          <button
            type="button"
            onClick={() => setShowItemForm(false)}
            className="ml-2 shrink-0 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowItemForm(true)}
          type="button"
          className="flex items-center space-x-1 py-2 px-4"
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap gap-4 mt-4">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => removeItem(i)}
              className="bg-slate-200 flex space-x-2 items-center dark:bg-slate-600 py-2 px-4 rounded-lg cursor-pointer dark:text-slate-300 text-slate-800"
            >
              <p>{item}</p>
              <X className="w-4 h-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
