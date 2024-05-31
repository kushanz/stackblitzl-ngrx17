import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictInput]',
})
export class RestrictInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target']) onInput(
    target: HTMLTextAreaElement
  ): void {
    const inputElement = target;
    const maxWidth = 400;
    const maxHeight = 200;

    const currentWidth = inputElement.scrollWidth;
    const currentHeight = inputElement.scrollHeight;

    if (currentWidth > maxWidth || currentHeight > maxHeight) {
      // Calculate the maximum number of characters that fit in the textarea
      const maxChars = Math.floor(
        (maxWidth * maxHeight * inputElement.value.length) /
          (currentWidth * currentHeight)
      );

      // Trim the input value to fit within the specified dimensions
      inputElement.value = inputElement.value.slice(0, maxChars);
    }
  }
}
