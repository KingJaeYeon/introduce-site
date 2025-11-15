import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import React from "react";

interface Props {
    onClose: () => void;
    data?: {
        link: string
    };
}

export function ViewModal({onClose, data}: Props) {
    return <Dialog open={true} onOpenChange={onClose}>
        <DialogContent  className="bg-secondary max-w-[18rem] border-2 p-4">
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
}