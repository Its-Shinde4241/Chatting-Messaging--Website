import { useRef, useState } from "react"
import { useChatStore } from "../store/useChatStore";
import { X, Image, SendHorizonal, Send } from "lucide-react";
import toast, { ToastBar } from "react-hot-toast";

export default function MessageInput() {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const { sendMessage } = useChatStore();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // console.log(file); 
        if (!file.type.startsWith("image/")) {
            toast.error("Please select an image first !")
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const removeImage = (e) => {
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        };
    };

    const handleSendMesaage = async (e) => {
        e.preventDefault();
        if (!text.trim() && !imagePreview) {
            return;
        }
        try {
            await sendMessage({
                text: text.trim(),
                image: imagePreview,
            });
            // clear form 
            setText("");
            setImagePreview(null);
            if (fileInputRef.current) fileInputRef.current.value = ""
        } catch (error) {
            console.error("failed to send message :", error)
        }
    };

    return (
        <div className="p-4 w-full">
            {
                imagePreview && (
                    <div className="mb-3 flex items-center gap-2">
                        <div className="relative">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-lg border border-zinc-700"
                            />
                            <button
                                onClick={removeImage}
                                className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-base-300 flex items-center justify-center"
                                type="button"
                            >
                                <X className="size-4" />
                            </button>
                        </div>
                    </div>
                )
            }
            <form onSubmit={handleSendMesaage} className="flex items-center gap-2">
                <div className="flex-1 flex gap-2">
                    <input
                        type="text"
                        className="w-full input input-bordered rounded-lg input-sm sm:input-md"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type a message"
                    />

                    <input
                        type="file"
                        accept="image/"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                    <button
                        type="button"
                        className={`btn-sm sm:flex justify-center sm:btn-md btn btn-circle 
                            ${imagePreview ? "text-emerald-500" : ""}
                            `}
                        onClick={() => { fileInputRef.current?.click() }}
                    >
                        <Image size={20} />
                    </button>
                </div>

                <button
                    type="submit"
                    className="btn-sm sm:flex sm:justify-center btn sm:btn-md btn-circle "
                    disabled={!text.trim() && !imagePreview}
                >
                    <Send size={22} />
                </button>
            </form>
        </div>

    )
}
