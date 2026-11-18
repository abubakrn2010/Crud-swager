import React, { Children } from 'react'
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"


const Modal = ({open,children}) => {
  return (
     <Dialog open={open}>
            <DialogContent className="p-6">
                {children}
            </DialogContent>
        </Dialog>
  )
}

export default Modal
