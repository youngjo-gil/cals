'use client'

import { cn } from "@/lib/utils"
import { Editor } from "../editor"
import { Input } from "../form/inputs"
import {
    Dialog,
    DialogTitle,
    DialogTrigger,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "../ui/dialog"
import { Button } from "@/components/ui/button";

export const EditScheduleDialog = () => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant={'default'}>Edit</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogTitle>스케쥴 타입 관리</DialogTitle>

                    <DialogDescription>
                        <div className={cn(cn(`grid w-full gap-5`))}>
                            <Input name="title" label='제목' placeholder="회의" />

                            <Editor
                                height="200px"
                                excludedToolbarItems={["blockType"]}
                                placeholder="내용을 입력해주세요."
                            />
                        </div>
                    </DialogDescription>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant={'secondary'}>Cancel</Button>
                        </DialogClose>
                        <Button variant={'default'} type="submit">Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
