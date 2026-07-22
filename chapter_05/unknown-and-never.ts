const handleWebhookInput = (input: unknown) => {// red squiggly line under input

  input.toUppercase();
};
// hovering over input shows:
'input' is of type 'unknown'.

const handleWebhookInputWithAny = (input: any) => {  // no error
  input.toUppercase();
};

const getNever = () => {
    //  This function never returns!
    throw new Error("This function neer returns");
}

const fn = (input: never) => {};

// red squiggly line under everything in parens:
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});

// No error here, since we're assigning never to never:
fn(getNever());

const str: string = getNever();

const num: number = getNever();

const bool: boolean = getNever();

const arr: string[] = getNever();