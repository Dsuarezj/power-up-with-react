import Downshift from 'downshift';
import React from 'react';

function BasicAutocomplete({items, onChange}) {
    return (
        <Downshift onChange={onChange}>
            {({
                  getInputProps,
                  getItemProps,
                  isOpen,
                  inputValue,
                  selectedItem,
                  highlightedIndex
              }) => (
                <div>
                    <input {...getInputProps({placeholder: 'Favorite color ?'})} />
                    {isOpen ? (
                        <div style={{border: '1px solid #ccc'}}>
                            {items
                                .filter(
                                    i =>
                                    !inputValue ||
                                    i.toLowerCase().includes(inputValue.toLowerCase()),
                                )
                                .map((item, index) => (
                                    <div
                                        {...getItemProps({item})}
                                        key={item}
                                        style={{
                                            backgroundColor:
                                                highlightedIndex === index ? 'gray' : 'white',
                                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                        </div>
                    ) : null}
                </div>
            )}
        </Downshift>
    )
}

function Selector() {
    return (
        <BasicAutocomplete
            items={['red', 'blue', 'yellow']}
            onChange={selectedItem => console.log(selectedItem)}
        />
    )
}

export default Selector;