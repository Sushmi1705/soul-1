import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/data/content";
import { toast } from "sonner";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, clear } =
    useCart();
  const [stage, setStage] = useState("cart"); // cart | checkout | placed
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const reset = () => {
    setTimeout(() => {
      setStage("cart");
      setForm({ name: "", email: "", address: "" });
    }, 300);
  };

  const handleClose = (v) => {
    setIsOpen(v);
    if (!v) reset();
  };

  const handlePlace = () => {
    if (!form.name || !form.email) {
      toast.error("Please fill your name and email.");
      return;
    }
    setStage("placed");
    toast.success("Order placed successfully!", {
      description: `Total ${formatINR(total)} · Confirmation sent to ${form.email}`,
    });
    clear();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent
        data-testid="cart-drawer"
        className="w-full sm:max-w-md bg-[#FAFAFA] border-l border-[#E5E1D8] p-0 flex flex-col"
      >
        <SheetHeader className="p-6 border-b border-[#E5E1D8]">
          <SheetTitle className="font-serif text-2xl text-[#1A1A1A] flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#B38B36]" />
            {stage === "cart" && "Your Cart"}
            {stage === "checkout" && "Checkout"}
            {stage === "placed" && "Order Placed"}
          </SheetTitle>
        </SheetHeader>

        {/* CART STAGE */}
        {stage === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div
                  data-testid="cart-empty-state"
                  className="flex flex-col items-center justify-center h-full text-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F3F1EC] flex items-center justify-center mb-5">
                    <Sparkles className="w-7 h-7 text-[#B38B36]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-[#5C5C5C] max-w-xs">
                    Begin your journey — explore our courses and add one to your
                    path.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((i) => (
                    <div
                      key={i.id}
                      data-testid={`cart-item-${i.id}`}
                      className="flex gap-4 bg-white border border-[#E5E1D8] rounded-xl p-3"
                    >
                      <div className="w-20 h-20 bg-[#F3F1EC] rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={i.image}
                          alt={i.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-[#725D46]">
                          {i.category}
                        </div>
                        <h4 className="font-serif text-lg text-[#1A1A1A] truncate">
                          {i.title}
                        </h4>
                        <div className="flex items-center justify-between mt-2">
                          <div className="inline-flex items-center border border-[#E5E1D8] rounded-full">
                            <button
                              data-testid={`cart-decrement-${i.id}`}
                              onClick={() => updateQty(i.id, i.qty - 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#1A1A1A] hover:text-[#B38B36]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-sm">
                              {i.qty}
                            </span>
                            <button
                              data-testid={`cart-increment-${i.id}`}
                              onClick={() => updateQty(i.id, i.qty + 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#1A1A1A] hover:text-[#B38B36]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="font-serif text-[#1A1A1A]">
                            {formatINR(i.price * i.qty)}
                          </div>
                        </div>
                      </div>
                      <button
                        data-testid={`cart-remove-${i.id}`}
                        onClick={() => removeItem(i.id)}
                        className="self-start text-[#5C5C5C] hover:text-[#B38B36]"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[#E5E1D8] p-6 bg-white space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs tracking-[0.25em] uppercase text-[#725D46]">
                    Subtotal
                  </span>
                  <span
                    data-testid="cart-subtotal"
                    className="font-serif text-2xl text-[#1A1A1A]"
                  >
                    {formatINR(total)}
                  </span>
                </div>
                <button
                  data-testid="checkout-button"
                  onClick={() => setStage("checkout")}
                  className="w-full bg-[#1A1A1A] hover:bg-[#B38B36] text-white text-xs tracking-[0.25em] uppercase py-4 rounded-full transition-all duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </>
        )}

        {/* CHECKOUT STAGE */}
        {stage === "checkout" && (
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-[#725D46] mb-2">
                Full Name
              </label>
              <input
                data-testid="checkout-input-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white border border-[#E5E1D8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B38B36]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-[#725D46] mb-2">
                Email
              </label>
              <input
                data-testid="checkout-input-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-[#E5E1D8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B38B36]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.25em] uppercase text-[#725D46] mb-2">
                Address (optional)
              </label>
              <textarea
                data-testid="checkout-input-address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full bg-white border border-[#E5E1D8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B38B36] resize-none"
                rows={3}
                placeholder="Shipping address (for physical materials)"
              />
            </div>

            <div className="border-t border-[#E5E1D8] pt-5 space-y-2">
              <div className="flex justify-between text-sm text-[#5C5C5C]">
                <span>Items</span>
                <span>{items.reduce((s, i) => s + i.qty, 0)}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs tracking-[0.25em] uppercase text-[#725D46]">
                  Total
                </span>
                <span className="font-serif text-2xl text-[#1A1A1A]">
                  {formatINR(total)}
                </span>
              </div>
            </div>

            <div className="flex gap-3 pt-3">
              <button
                data-testid="checkout-back-button"
                onClick={() => setStage("cart")}
                className="flex-1 border border-[#E5E1D8] text-[#1A1A1A] hover:border-[#B38B36] hover:text-[#B38B36] text-xs tracking-[0.25em] uppercase py-4 rounded-full transition-all"
              >
                Back
              </button>
              <button
                data-testid="place-order-button"
                onClick={handlePlace}
                className="flex-1 bg-[#1A1A1A] hover:bg-[#B38B36] text-white text-xs tracking-[0.25em] uppercase py-4 rounded-full transition-all"
              >
                Place Order
              </button>
            </div>
          </div>
        )}

        {/* PLACED STAGE */}
        {stage === "placed" && (
          <div
            data-testid="order-placed-state"
            className="flex-1 flex flex-col items-center justify-center text-center px-6"
          >
            <div className="w-20 h-20 rounded-full bg-[#B38B36]/10 border border-[#B38B36]/30 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#B38B36]" />
            </div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-[#725D46] mb-3">
              Order Placed
            </div>
            <h3 className="font-serif text-3xl text-[#1A1A1A] mb-4">
              Thank you,{" "}
              <em className="italic text-[#B38B36]">
                {form.name.split(" ")[0]}
              </em>
            </h3>
            <p className="text-sm text-[#5C5C5C] max-w-xs mb-8">
              A confirmation and your access details have been sent to{" "}
              <span className="text-[#B38B36]">{form.email}</span>.
            </p>
            <button
              data-testid="order-continue-button"
              onClick={() => handleClose(false)}
              className="bg-[#1A1A1A] hover:bg-[#B38B36] text-white text-xs tracking-[0.25em] uppercase px-8 py-3.5 rounded-full transition-all"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
