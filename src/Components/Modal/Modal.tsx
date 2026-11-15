
import React from 'react'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"

interface ModalProps {
    open: boolean
}

const Modal = ({ open, children }: ModalProps) => {
    return (
        <Dialog open={open}>
            <DialogContent className="p-6">
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal
