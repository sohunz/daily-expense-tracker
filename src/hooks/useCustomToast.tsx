import { useToast } from "@/components/ui/use-toast";

const useCustomToast = (title: string) => {
    const { toast } = useToast();

    const showToast = () => {
        toast({
            title: title,
            duration: 4000,
        });
    };

    return showToast;
};

export default useCustomToast;
