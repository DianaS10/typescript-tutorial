// Drag & Drop Interfaces
// namespace App {
//     export interface Draggable {
//         dragStartHandler(event: DragEvent): void;
//         dragEndHandler(event: DragEvent): void;
//     }
    
//     export interface DragTarget {
//         // Signal the browser that the thing you target is a valid dragable target
//         // dragOverHandler() will permit the drop
//         dragOverHandler(event: DragEvent): void;
//         // dragHandler() will handle the drop; update data in UI
//         dropHandler(event: DragEvent): void;
//         // dragLeaveHandler() will remove the visual update
//         dragLeaveHandler(event: DragEvent): void;
//     }
// }

export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
    // Signal the browser that the thing you target is a valid dragable target
    // dragOverHandler() will permit the drop
    dragOverHandler(event: DragEvent): void;
    // dragHandler() will handle the drop; update data in UI
    dropHandler(event: DragEvent): void;
    // dragLeaveHandler() will remove the visual update
    dragLeaveHandler(event: DragEvent): void;
}
            


