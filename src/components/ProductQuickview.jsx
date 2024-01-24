import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductQuickView({ setProductOverview, product }) {
  const [open, setOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-700 bg-opacity-65 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => {
                      setOpen(false);
                      setProductOverview(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-xl text-gray-900">
                          ${product.price}
                        </p>

                        <p className="text-sm mt-2">{product.description}</p>

                        <span className="flex flex-row items-center justify-center gap-1 my-4 w-[6vw] py-1 rounded-lg text-sm bg-[#eeeeee]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                          </svg>
                          <React.Fragment>79% (141)</React.Fragment>
                        </span>
                      </section>

                      <hr />
                      {product.options && (
                        <>
                          <section
                            aria-labelledby="options-heading"
                            className="mt-4"
                          >
                            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                              Choose your preparation
                            </h2>

                            <form action="">
                              {product.options.map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="border-b-2 py-3 flex gap-2 items-center text-sm font-medium"
                                  >
                                    <input
                                      type="radio"
                                      name="foodOption"
                                      id=""
                                      value={item.name}
                                    />
                                    <div>
                                      <label>{item.name}</label>
                                      {item.price && <p>+${item.price}</p>}
                                    </div>
                                  </div>
                                );
                              })}
                            </form>
                          </section>
                        </>
                      )}

                      <section
                        aria-labelledby="options-heading"
                        className="mt-4"
                      >
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                          Special Instructions
                        </h2>
                        <textarea
                          name=""
                          placeholder="Add a note"
                          className="background-secondary w-full mt-3 ring-0 border-0 focus:ring-0 rounded-lg"
                          id=""
                          rows="3"
                        ></textarea>
                        <p className="text-sm mb-3">
                          You may be charged for extras.
                        </p>{" "}
                      </section>
                      <hr />

                      <div className="flex items-center gap-2 mt-4">
                        <div className="counter">
                          <button className="bg-gray-200 rounded-lg font-medium text-xl w-12 h-12">
                            -
                          </button>
                          <button className="p-2 w-10">1</button>
                          <button className="bg-gray-200 rounded-lg font-medium text-xl w-12 h-12">
                            +
                          </button>
                        </div>
                        <button className="bg-black text-white p-3 px-3 rounded-lg">
                          Add 1 to order • $11.49
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
