import React from 'react';

const products = [
    {
        id: 1,
        price: 699,
        name: 'Beauty Bouquet',
        image: 'https://s3-alpha-sig.figma.com/img/8149/9f62/d5b704c5b676f6d10b4259f683b3f386?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIrCmaZKuXPXgxYb8D5VoTTOzJtK4wJ4-3rshRq4281FOqurC-1itQ6z8LQWJFi6EV~tSZpelyQxM66cy3atYG2ohRRj4FWgZuN6mZNIFhCQQSpnWi6Fozlwl~MUwYQJplL76RM189pCgKaiEoIOfIQQfjhgEtnnUM6rIMg48zlIRCAMcQZRP8Ex992WWeu56jNWo8xfjS9udZxs9qK96M161PAm36vrlSSvkCS2Mi77QR5JFVi8XKoFMgEu9A5G6MN2pcYrCKQV-~xhTSeZPcyW~LQGQ6hjY9m0gLFSqYzfBPCXzGNtCDpsjWkAHkgk~mfllYVb7-sq0xf-NPxdUA__', // Replace with actual image
    },
    {
        id: 2,
        price: 999,
        name: 'Beauty Bouquet',
        image: 'https://s3-alpha-sig.figma.com/img/8149/9f62/d5b704c5b676f6d10b4259f683b3f386?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIrCmaZKuXPXgxYb8D5VoTTOzJtK4wJ4-3rshRq4281FOqurC-1itQ6z8LQWJFi6EV~tSZpelyQxM66cy3atYG2ohRRj4FWgZuN6mZNIFhCQQSpnWi6Fozlwl~MUwYQJplL76RM189pCgKaiEoIOfIQQfjhgEtnnUM6rIMg48zlIRCAMcQZRP8Ex992WWeu56jNWo8xfjS9udZxs9qK96M161PAm36vrlSSvkCS2Mi77QR5JFVi8XKoFMgEu9A5G6MN2pcYrCKQV-~xhTSeZPcyW~LQGQ6hjY9m0gLFSqYzfBPCXzGNtCDpsjWkAHkgk~mfllYVb7-sq0xf-NPxdUA__', // Replace with actual image
    },
    {
        id: 1,
        price: 699,
        name: 'Beauty Bouquet',
        image: 'https://s3-alpha-sig.figma.com/img/8149/9f62/d5b704c5b676f6d10b4259f683b3f386?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIrCmaZKuXPXgxYb8D5VoTTOzJtK4wJ4-3rshRq4281FOqurC-1itQ6z8LQWJFi6EV~tSZpelyQxM66cy3atYG2ohRRj4FWgZuN6mZNIFhCQQSpnWi6Fozlwl~MUwYQJplL76RM189pCgKaiEoIOfIQQfjhgEtnnUM6rIMg48zlIRCAMcQZRP8Ex992WWeu56jNWo8xfjS9udZxs9qK96M161PAm36vrlSSvkCS2Mi77QR5JFVi8XKoFMgEu9A5G6MN2pcYrCKQV-~xhTSeZPcyW~LQGQ6hjY9m0gLFSqYzfBPCXzGNtCDpsjWkAHkgk~mfllYVb7-sq0xf-NPxdUA__', // Replace with actual image
    },
    {
        id: 2,
        price: 999,
        name: 'Beauty Bouquet',
        image: 'https://s3-alpha-sig.figma.com/img/8149/9f62/d5b704c5b676f6d10b4259f683b3f386?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIrCmaZKuXPXgxYb8D5VoTTOzJtK4wJ4-3rshRq4281FOqurC-1itQ6z8LQWJFi6EV~tSZpelyQxM66cy3atYG2ohRRj4FWgZuN6mZNIFhCQQSpnWi6Fozlwl~MUwYQJplL76RM189pCgKaiEoIOfIQQfjhgEtnnUM6rIMg48zlIRCAMcQZRP8Ex992WWeu56jNWo8xfjS9udZxs9qK96M161PAm36vrlSSvkCS2Mi77QR5JFVi8XKoFMgEu9A5G6MN2pcYrCKQV-~xhTSeZPcyW~LQGQ6hjY9m0gLFSqYzfBPCXzGNtCDpsjWkAHkgk~mfllYVb7-sq0xf-NPxdUA__', // Replace with actual image
    },
    {
        id: 1,
        price: 699,
        name: 'Beauty Bouquet',
        image: 'https://s3-alpha-sig.figma.com/img/8149/9f62/d5b704c5b676f6d10b4259f683b3f386?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIrCmaZKuXPXgxYb8D5VoTTOzJtK4wJ4-3rshRq4281FOqurC-1itQ6z8LQWJFi6EV~tSZpelyQxM66cy3atYG2ohRRj4FWgZuN6mZNIFhCQQSpnWi6Fozlwl~MUwYQJplL76RM189pCgKaiEoIOfIQQfjhgEtnnUM6rIMg48zlIRCAMcQZRP8Ex992WWeu56jNWo8xfjS9udZxs9qK96M161PAm36vrlSSvkCS2Mi77QR5JFVi8XKoFMgEu9A5G6MN2pcYrCKQV-~xhTSeZPcyW~LQGQ6hjY9m0gLFSqYzfBPCXzGNtCDpsjWkAHkgk~mfllYVb7-sq0xf-NPxdUA__', // Replace with actual image
    },
    {
        id: 2,
        price: 999,
        name: 'Beauty Bouquet',
        image: 'https://s3-alpha-sig.figma.com/img/8149/9f62/d5b704c5b676f6d10b4259f683b3f386?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIrCmaZKuXPXgxYb8D5VoTTOzJtK4wJ4-3rshRq4281FOqurC-1itQ6z8LQWJFi6EV~tSZpelyQxM66cy3atYG2ohRRj4FWgZuN6mZNIFhCQQSpnWi6Fozlwl~MUwYQJplL76RM189pCgKaiEoIOfIQQfjhgEtnnUM6rIMg48zlIRCAMcQZRP8Ex992WWeu56jNWo8xfjS9udZxs9qK96M161PAm36vrlSSvkCS2Mi77QR5JFVi8XKoFMgEu9A5G6MN2pcYrCKQV-~xhTSeZPcyW~LQGQ6hjY9m0gLFSqYzfBPCXzGNtCDpsjWkAHkgk~mfllYVb7-sq0xf-NPxdUA__', // Replace with actual image
    },
];

const ProductCard = ({ product }) => {
    return (
        <div className="p-4 ">
            <img
                className="rounded-lg shadow-lg w-40 h-40 object-cover mx-auto border-3 border-blue-400"
                src={product.image}
                alt={product.name}
            />
            <p className="text-center font-semibold mt-2">{product.name}</p>
        </div>
    );
};

const PriceTag = ({ price }) => {
    return (
        <div className="relative left-14 w-40 h-40 flex items-center justify-center bg-yellow-400 rounded-full shadow-lg text-white font-bold">
            <div className="relative  w-32 h-32 flex items-center justify-center bg-orange-900 rounded-full shadow-lg text-white font-bold">
                <div className="relative  w-24 h-24 flex  items-center justify-center bg-orange-500 rounded-full shadow-lg text-white font-bold">

                    <div className="relative  w-14 h-14 flex items-center justify-center bg-yellow-400 rounded-full shadow-lg text-white font-bold">
                        <div className="relative  w-12 h-12 flex items-center justify-center bg-red-900 rounded-full shadow-lg text-white font-bold">
                            <span>{price}</span>
                            <div className="absolute -right-20 w-0 h-0 border-t-[26px] border-t-transparent border-b-[26px] border-b-transparent border-l-[26px] border-l-yellow-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const steps = [
    { label: 'CART' },
    { label: 'GIFT'},
    { label: 'REVIEW'},
    { label: 'ADDRESS'},
    { label: 'PAYMENT'}
  ];
  
  const CheckoutProgressBar = () => {
    return (
      <div className="flex items-center justify-end  w-2/3  my-2 ml-96">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className="flex items-center">
              
              <span className=" text-xs font-medium">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 border-t-2 mx-3"
                   style={{ borderColor: step.done ? '#22c55e' : '#d1d5db' }}>
              </div>
            )}
          </React.Fragment>
        ))}
        
      </div>
    );
  };
const App = () => {
    return (
        <div className="p-10">

<CheckoutProgressBar />
            {/* Product Section */}
            <div className="space-y-8">
                {products.map((product, index) => (
                    <div key={product.id} className="flex justify-between items-center">
                        <PriceTag price={product.price} />
                        <div className="flex ">
                            {[...Array(5)].map((_, i) => (
                                <ProductCard key={i} product={product} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
