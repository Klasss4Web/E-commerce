import React from 'react'
import { BsTrash } from 'react-icons/bs';

export const DeleteToast = ({ proceed, warningMsg }) => {
  return (
    <div>
      <button type="button" class="btn btn-primary" id="liveToastBtn">
        {/* <BsTrash
          color="red"
          cursor="pointer"
         
        /> */}
      </button>
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body" autohide="false">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </div>
  );
}
