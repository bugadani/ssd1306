var N = null;var searchIndex = {};
searchIndex["embedded_graphics"]={"doc":"Embedded graphics","items":[[0,"drawable","embedded_graphics","`Drawable` trait and helpers",N,N],[6,"Coord","embedded_graphics::drawable","2D coordinate type",N,N],[6,"Color","","Monochrome colour type",N,N],[6,"Pixel","","A single pixel",N,N],[8,"Drawable","","Marks an object as \"drawable\". Must be implemented for all graphics objects",N,N],[0,"fonts","embedded_graphics","Pixel based fonts",N,N],[3,"Font6x8","embedded_graphics::fonts","Container struct to hold a positioned piece of text",N,N],[12,"pos","","Top left corner of the text",0,N],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"clone","","",0,[[["self"]],["font6x8"]]],[11,"render_str","","",0,[[["str"]],["font6x8"]]],[11,"translate","","Translate the image from its current position to a new position by (x, y) pixels, returning a new `Font6x8`.",0,[[["self"],["coord"]],["self"]]],[8,"Font","","Common methods for all fonts",N,N],[10,"render_str","","Render a string in the implementing font's typeface.",1,[[["str"]],["self"]]],[0,"image","embedded_graphics","Image object",N,N],[3,"Image1BPP","embedded_graphics::image","1 bit per pixel image",N,N],[12,"offset","","Image offset in pixels from screen origin (0,0)",2,N],[3,"Image8BPP","","8 bit per pixel image",N,N],[12,"offset","","Top left corner offset from display origin (0,0)",3,N],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"new","","",2,N],[11,"translate","","Translate the image from its current position to a new position by (x, y) pixels, returning a new `Image1BPP`.",2,[[["self"],["coord"]],["self"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"new","","Create a new 8BPP image with given data, width and height. Data length must equal `width * height`",3,N],[11,"translate","","Translate the image from its current position to a new position by (x, y) pixels, returning a new `Image8BPP`.",3,[[["self"],["coord"]],["self"]]],[8,"Image","","Image trait",N,N],[10,"new","","Create a new image with given pixel data, width and height",4,N],[0,"prelude","embedded_graphics","Prelude",N,N],[0,"primitives","","Graphics primitives",N,N],[0,"circle","embedded_graphics::primitives","The circle primitive",N,N],[3,"Circle","embedded_graphics::primitives::circle","Circle primitive",N,N],[12,"center","","Center point of circle",5,N],[12,"radius","","Radius of the circle",5,N],[12,"color","","Line colour of circle",5,N],[3,"CircleIterator","","Pixel iterator for each pixel in the circle border",N,N],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"clone","","",5,[[["self"]],["circle"]]],[11,"new","","Create a new circle with center point, radius and border color",5,[[["coord"],["u32"],["u8"]],["self"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"clone","","",6,[[["self"]],["circleiterator"]]],[11,"next","","",6,[[["self"]],["option"]]],[11,"translate","","Translate the circle center from its current position to a new position by (x, y) pixels, returning a new `Circle`.",5,[[["self"],["coord"]],["self"]]],[0,"line","embedded_graphics::primitives","The line primitive",N,N],[3,"Line","embedded_graphics::primitives::line","Line primitive",N,N],[12,"start","","Start point",7,N],[12,"end","","End point",7,N],[12,"color","","Line color",7,N],[3,"LineIterator","","Pixel iterator for each pixel in the line",N,N],[11,"fmt","","",7,[[["self"],["formatter"]],["result"]]],[11,"clone","","",7,[[["self"]],["line"]]],[11,"new","","Create a new line",7,[[["coord"],["coord"],["u8"]],["self"]]],[11,"fmt","","",8,[[["self"],["formatter"]],["result"]]],[11,"next","","",8,[[["self"]],["option"]]],[11,"translate","","Translate the line from its current position to a new position by (x, y) pixels, returning a new `Line`.",7,[[["self"],["coord"]],["self"]]],[0,"rect","embedded_graphics::primitives","The rectangle primitive. Also good for drawing squares.",N,N],[3,"Rect","embedded_graphics::primitives::rect","Rectangle primitive",N,N],[12,"top_left","","Top left point of the rect",9,N],[12,"bottom_right","","Bottom right point of the rect",9,N],[12,"color","","Border color",9,N],[3,"RectIterator","","Pixel iterator for each pixel in the rect border",N,N],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"clone","","",9,[[["self"]],["rect"]]],[11,"new","","Create a new rectangle from the top left point to the bottom right point with a given border color",9,[[["coord"],["coord"],["u8"]],["self"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"clone","","",10,[[["self"]],["rectiterator"]]],[11,"next","","",10,[[["self"]],["option"]]],[11,"translate","","Translate the rect from its current position to a new position by (x, y) pixels, returning a new `Rect`.",9,[[["self"],["coord"]],["self"]]],[0,"transform","embedded_graphics","Transformations for graphics objects",N,N],[8,"Transform","embedded_graphics::transform","Transform operations",N,N],[10,"translate","","Move the origin of an object by a given number of (x, y) pixels",11,[[["self"],["coord"]],["self"]]],[8,"Drawing","embedded_graphics","The main trait of this crate. All graphics objects must implement it.",N,N],[10,"draw","","Draw an object from an iterator over its pixels",12,[[["self"],["t"]]]],[11,"try_from","embedded_graphics::fonts","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_from","embedded_graphics::image","",2,[[["u"]],["result"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_from","embedded_graphics::primitives::circle","",5,[[["u"]],["result"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into_iter","","",6,[[["self"]],["i"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"try_from","embedded_graphics::primitives::line","",7,[[["u"]],["result"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into_iter","","",8,[[["self"]],["i"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_from","embedded_graphics::primitives::rect","",9,[[["u"]],["result"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into_iter","","",10,[[["self"]],["i"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]]],"paths":[[3,"Font6x8"],[8,"Font"],[3,"Image1BPP"],[3,"Image8BPP"],[8,"Image"],[3,"Circle"],[3,"CircleIterator"],[3,"Line"],[3,"LineIterator"],[3,"Rect"],[3,"RectIterator"],[8,"Transform"],[8,"Drawing"]]};
searchIndex["embedded_hal"]={"doc":"A Hardware Abstraction Layer (HAL) for embedded systems","items":[[4,"Direction","embedded_hal","Count direction",N,N],[13,"Downcounting","","3, 2, 1",0,N],[13,"Upcounting","","1, 2, 3",0,N],[0,"blocking","","Blocking API",N,N],[0,"delay","embedded_hal::blocking","Delays",N,N],[8,"DelayMs","embedded_hal::blocking::delay","Millisecond delay",N,N],[10,"delay_ms","","Pauses execution for `ms` milliseconds",1,[[["self"],["uxx"]]]],[8,"DelayUs","","Microsecond delay",N,N],[10,"delay_us","","Pauses execution for `us` microseconds",2,[[["self"],["uxx"]]]],[0,"i2c","embedded_hal::blocking","Blocking I2C API",N,N],[8,"Read","embedded_hal::blocking::i2c","Blocking read",N,N],[16,"Error","","Error type",3,N],[10,"read","","Reads enough bytes from slave with `address` to fill `buffer`",3,N],[8,"Write","","Blocking write",N,N],[16,"Error","","Error type",4,N],[10,"write","","Sends bytes to slave with address `addr`",4,N],[8,"WriteRead","","Blocking write + read",N,N],[16,"Error","","Error type",5,N],[10,"write_read","","Sends bytes to slave with address `addr` and then reads enough bytes to fill `buffer` in a single transaction",5,N],[0,"serial","embedded_hal::blocking","Blocking serial API",N,N],[0,"write","embedded_hal::blocking::serial","Blocking serial write",N,N],[8,"Default","embedded_hal::blocking::serial::write","Marker trait to opt into default blocking write implementation",N,N],[8,"Write","embedded_hal::blocking::serial","Write half of a serial interface (blocking variant)",N,N],[16,"Error","","The type of error that can occur when writing",6,N],[10,"bwrite_all","","Writes a slice, blocking until everything has been written",6,N],[10,"bflush","","Block until the serial interface has sent all buffered words",6,[[["self"]],["result"]]],[0,"spi","embedded_hal::blocking","Blocking SPI API",N,N],[0,"transfer","embedded_hal::blocking::spi","Blocking transfer",N,N],[8,"Default","embedded_hal::blocking::spi::transfer","Default implementation of `blocking::spi::Transfer<W>` for implementers of `spi::FullDuplex<W>`",N,N],[0,"write","embedded_hal::blocking::spi","Blocking write",N,N],[8,"Default","embedded_hal::blocking::spi::write","Default implementation of `blocking::spi::Write<W>` for implementers of `spi::FullDuplex<W>`",N,N],[8,"Transfer","embedded_hal::blocking::spi","Blocking transfer",N,N],[16,"Error","","Error type",7,N],[10,"transfer","","Sends `words` to the slave. Returns the `words` received from the slave",7,N],[8,"Write","","Blocking write",N,N],[16,"Error","","Error type",8,N],[10,"write","","Sends `words` to the slave, ignoring all the incoming words",8,N],[0,"rng","embedded_hal::blocking","Blocking hardware random number generator",N,N],[8,"Read","embedded_hal::blocking::rng","Blocking read",N,N],[16,"Error","","Error type",9,N],[10,"read","","Reads enough bytes from hardware random number generator to fill `buffer`",9,N],[0,"digital","embedded_hal","Digital I/O",N,N],[0,"toggleable","embedded_hal::digital","If you can read and write the output state, a pin is toggleable by software.",N,N],[8,"Default","embedded_hal::digital::toggleable","Software-driven `toggle()` implementation.",N,N],[8,"OutputPin","embedded_hal::digital","Single digital push-pull output pin",N,N],[10,"set_low","","Drives the pin low",10,[[["self"]]]],[10,"set_high","","Drives the pin high",10,[[["self"]]]],[8,"StatefulOutputPin","","Push-pull output pin that can read its output state",N,N],[10,"is_set_high","","Is the pin in drive high mode?",11,[[["self"]],["bool"]]],[10,"is_set_low","","Is the pin in drive low mode?",11,[[["self"]],["bool"]]],[8,"ToggleableOutputPin","","Output pin that can be toggled",N,N],[10,"toggle","","Toggle pin output.",12,[[["self"]]]],[8,"InputPin","","Single digital input pin",N,N],[10,"is_high","","Is the input pin high?",13,[[["self"]],["bool"]]],[10,"is_low","","Is the input pin low?",13,[[["self"]],["bool"]]],[0,"prelude","embedded_hal","The prelude is a collection of all the traits in this crate",N,N],[0,"serial","","Serial interface",N,N],[8,"Read","embedded_hal::serial","Read half of a serial interface",N,N],[16,"Error","","Read error",14,N],[10,"read","","Reads a single word from the serial interface",14,[[["self"]],["result"]]],[8,"Write","","Write half of a serial interface",N,N],[16,"Error","","Write error",15,N],[10,"write","","Writes a single word to the serial interface",15,[[["self"],["word"]],["result"]]],[10,"flush","","Ensures that none of the previously written words are still buffered",15,[[["self"]],["result"]]],[0,"spi","embedded_hal","Serial Peripheral Interface",N,N],[3,"Mode","embedded_hal::spi","SPI mode",N,N],[12,"polarity","","Clock polarity",16,N],[12,"phase","","Clock phase",16,N],[4,"Polarity","","Clock polarity",N,N],[13,"IdleLow","","Clock signal low when idle",17,N],[13,"IdleHigh","","Clock signal high when idle",17,N],[4,"Phase","","Clock phase",N,N],[13,"CaptureOnFirstTransition","","Data in \"captured\" on the first clock transition",18,N],[13,"CaptureOnSecondTransition","","Data in \"captured\" on the second clock transition",18,N],[8,"FullDuplex","","Full duplex (master mode)",N,N],[16,"Error","","An enumeration of SPI errors",19,N],[10,"read","","Reads the word stored in the shift register",19,[[["self"]],["result"]]],[10,"send","","Sends a word to the slave",19,[[["self"],["word"]],["result"]]],[11,"clone","","",17,[[["self"]],["polarity"]]],[11,"eq","","",17,[[["self"],["polarity"]],["bool"]]],[11,"clone","","",18,[[["self"]],["phase"]]],[11,"eq","","",18,[[["self"],["phase"]],["bool"]]],[11,"clone","","",16,[[["self"]],["mode"]]],[11,"eq","","",16,[[["self"],["mode"]],["bool"]]],[11,"ne","","",16,[[["self"],["mode"]],["bool"]]],[0,"timer","embedded_hal","Timers",N,N],[8,"CountDown","embedded_hal::timer","A count down timer",N,N],[16,"Time","","The unit of time used by this timer",20,N],[10,"start","","Starts a new count down",20,[[["self"],["t"]]]],[10,"wait","","Non-blockingly \"waits\" until the count down finishes",20,[[["self"]],["result",["void"]]]],[8,"Periodic","","Marker trait that indicates that a timer is periodic",N,N],[8,"Capture","embedded_hal","Input capture",N,N],[16,"Error","","Enumeration of `Capture` errors",21,N],[16,"Channel","","Enumeration of channels that can be used with this `Capture` interface",21,N],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",21,N],[16,"Capture","","The type of the value returned by `capture`",21,N],[10,"capture","","\"Waits\" for a transition in the capture `channel` and returns the value of counter at that instant",21,N],[10,"disable","","Disables a capture `channel`",21,N],[10,"enable","","Enables a capture `channel`",21,N],[10,"get_resolution","","Returns the current resolution",21,N],[10,"set_resolution","","Sets the resolution of the capture timer",21,[[["self"],["r"]]]],[8,"Pwm","","Pulse Width Modulation",N,N],[16,"Channel","","Enumeration of channels that can be used with this `Pwm` interface",22,N],[16,"Time","","A time unit that can be converted into a human time unit (e.g. seconds)",22,N],[16,"Duty","","Type for the `duty` methods",22,N],[10,"disable","","Disables a PWM `channel`",22,N],[10,"enable","","Enables a PWM `channel`",22,N],[10,"get_period","","Returns the current PWM period",22,N],[10,"get_duty","","Returns the current duty cycle",22,N],[10,"get_max_duty","","Returns the maximum duty cycle value",22,N],[10,"set_duty","","Sets a new duty cycle",22,N],[10,"set_period","","Sets a new PWM period",22,[[["self"],["p"]]]],[8,"PwmPin","","A single PWM channel / pin",N,N],[16,"Duty","","Type for the `duty` methods",23,N],[10,"disable","","Disables a PWM `channel`",23,[[["self"]]]],[10,"enable","","Enables a PWM `channel`",23,[[["self"]]]],[10,"get_duty","","Returns the current duty cycle",23,N],[10,"get_max_duty","","Returns the maximum duty cycle value",23,N],[10,"set_duty","","Sets a new duty cycle",23,N],[8,"Qei","","Quadrature encoder interface",N,N],[16,"Count","","The type of the value returned by `count`",24,N],[10,"count","","Returns the current pulse count of the encoder",24,N],[10,"direction","","Returns the count direction",24,[[["self"]],["direction"]]],[11,"clone","","",0,[[["self"]],["direction"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"eq","","",0,[[["self"],["direction"]],["bool"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_from","embedded_hal::spi","",16,[[["u"]],["result"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"try_into","","",16,[[["self"]],["result"]]],[11,"into","","",16,[[["self"]],["u"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"get_type_id","","",16,[[["self"]],["typeid"]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"try_into","","",17,[[["self"]],["result"]]],[11,"into","","",17,[[["self"]],["u"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"get_type_id","","",17,[[["self"]],["typeid"]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"try_into","","",18,[[["self"]],["result"]]],[11,"into","","",18,[[["self"]],["u"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"get_type_id","","",18,[[["self"]],["typeid"]]]],"paths":[[4,"Direction"],[8,"DelayMs"],[8,"DelayUs"],[8,"Read"],[8,"Write"],[8,"WriteRead"],[8,"Write"],[8,"Transfer"],[8,"Write"],[8,"Read"],[8,"OutputPin"],[8,"StatefulOutputPin"],[8,"ToggleableOutputPin"],[8,"InputPin"],[8,"Read"],[8,"Write"],[3,"Mode"],[4,"Polarity"],[4,"Phase"],[8,"FullDuplex"],[8,"CountDown"],[8,"Capture"],[8,"Pwm"],[8,"PwmPin"],[8,"Qei"]]};
searchIndex["nb"]={"doc":"Minimal and reusable non-blocking I/O layer","items":[[4,"Error","nb","A non-blocking error",N,N],[13,"Other","","A different kind of error",0,N],[13,"WouldBlock","","This operation requires blocking behavior to complete",0,N],[6,"Result","","A non-blocking result",N,N],[11,"clone","","",0,[[["self"]],["error"]]],[11,"eq","","",0,[[["self"],["error"]],["bool"]]],[11,"ne","","",0,[[["self"],["error"]],["bool"]]],[11,"partial_cmp","","",0,[[["self"],["error"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["error"]],["bool"]]],[11,"le","","",0,[[["self"],["error"]],["bool"]]],[11,"gt","","",0,[[["self"],["error"]],["bool"]]],[11,"ge","","",0,[[["self"],["error"]],["bool"]]],[11,"cmp","","",0,[[["self"],["error"]],["ordering"]]],[11,"hash","","",0,N],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[14,"await","","Await operation (won't work until the language gains support for generators)",N,N],[14,"block","","Turns the non-blocking expression `$e` into a blocking operation.",N,N],[14,"try_nb","","Future adapter",N,N],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]]],"paths":[[4,"Error"]]};
searchIndex["ssd1306"]={"doc":"SSD1306 OLED display driver","items":[[0,"builder","ssd1306","Interface factory",N,N],[3,"Builder","ssd1306::builder","Builder struct. Driver options and interface are set using its methods.",N,N],[11,"clone","","",0,[[["self"]],["builder"]]],[11,"default","","",0,[[],["self"]]],[11,"new","","Create new builder with a default size of 128 x 64 pixels and no rotation.",0,[[],["self"]]],[11,"with_size","","Set the size of the display. Supported sizes are defined by [DisplaySize].",0,[[["self"],["displaysize"]],["self"]]],[11,"with_i2c_addr","","Set the I2C address to use. Defaults to 0x3C which is the most common address. The other address specified in the datasheet is 0x3D. Ignored when using SPI interface.",0,[[["self"],["u8"]],["self"]]],[11,"with_rotation","","Set the rotation of the display to one of four values. Defaults to no rotation. Note that 90º and 270º rotations are not supported by `TerminalMode`.",0,[[["self"],["displayrotation"]],["self"]]],[11,"connect_i2c","","Finish the builder and use I2C to communicate with the display",0,[[["self"],["i2c"]],["displaymode",["rawmode"]]]],[11,"connect_spi","","Finish the builder and use SPI to communicate with the display",0,[[["self"],["spi"],["dc"]],["displaymode",["rawmode"]]]],[0,"displayrotation","ssd1306","Display rotation",N,N],[4,"DisplayRotation","ssd1306::displayrotation","Display rotation.",N,N],[13,"Rotate0","","No rotation, normal display",1,N],[13,"Rotate90","","Rotate by 90 degress clockwise",1,N],[13,"Rotate180","","Rotate by 180 degress clockwise",1,N],[13,"Rotate270","","Rotate 270 degress clockwise",1,N],[11,"clone","","",1,[[["self"]],["displayrotation"]]],[0,"interface","ssd1306","SSD1306 Communication Interface (I2C/SPI)",N,N],[0,"i2c","ssd1306::interface","SSD1306 I2C Interface",N,N],[3,"I2cInterface","ssd1306::interface::i2c","SSD1306 I2C communication interface",N,N],[11,"new","","Create new SSD1306 I2C interface",2,[[["i2c"],["u8"]],["self"]]],[11,"send_commands","","",2,N],[11,"send_data","","",2,N],[0,"spi","ssd1306::interface","SSD1306 SPI interface",N,N],[3,"SpiInterface","ssd1306::interface::spi","SPI display interface.",N,N],[11,"new","","Create new SPI interface for communciation with SSD1306",3,[[["spi"],["dc"]],["self"]]],[11,"send_commands","","",3,N],[11,"send_data","","",3,N],[8,"DisplayInterface","ssd1306::interface","A method of communicating with SSD1306",N,N],[10,"send_commands","","Send a batch of up to 8 commands to display.",4,N],[10,"send_data","","Send data to display.",4,N],[0,"mode","ssd1306","Operating modes for the SSD1306",N,N],[0,"displaymode","ssd1306::mode","Abstraction of different operating modes for the SSD1306",N,N],[3,"DisplayMode","ssd1306::mode::displaymode","Display mode abstraction",N,N],[12,"0","","",5,N],[8,"DisplayModeTrait","","Trait with core functionality for display mode switching",N,N],[10,"new","","Allocate all required data and initialise display for mode",6,[[["displayproperties"]],["self"]]],[10,"release","","Release resources for reuse with different mode",6,[[["self"]],["displayproperties"]]],[11,"new","","Setup display to run in requested mode",5,[[["displayproperties"]],["self"]]],[11,"into","","Change into any mode implementing DisplayModeTrait",5,[[["self"]],["nmode"]]],[0,"graphics","ssd1306::mode","Buffered display module for use with the [embedded_graphics] crate",N,N],[3,"GraphicsMode","ssd1306::mode::graphics","Graphics mode handler",N,N],[11,"new","","Create new GraphicsMode instance",7,[[["displayproperties"]],["self"]]],[11,"release","","Release all resources used by GraphicsMode",7,[[["self"]],["displayproperties"]]],[11,"clear","","Clear the display buffer. You need to call `disp.flush()` for any effect on the screen",7,[[["self"]]]],[11,"reset","","Reset display",7,[[["self"],["rst"],["delay"]]]],[11,"flush","","Write out data to display",7,[[["self"]],["result"]]],[11,"set_pixel","","Turn a pixel on or off. A non-zero `value` is treated as on, `0` as off. If the X and Y coordinates are out of the bounds of the display, this method call is a noop.",7,[[["self"],["u32"],["u32"],["u8"]]]],[11,"init","","Display is set up in column mode, i.e. a byte walks down a column of 8 pixels from column 0 on the left, to column n on the right",7,[[["self"]],["result"]]],[11,"get_dimensions","","Get display dimensions, taking into account the current rotation of the display",7,N],[11,"set_rotation","","Set the display rotation",7,[[["self"],["displayrotation"]],["result"]]],[11,"draw","","",7,[[["self"],["t"]]]],[0,"raw","ssd1306::mode","Raw mode for coercion into richer driver types",N,N],[3,"RawMode","ssd1306::mode::raw","Raw display mode",N,N],[11,"new","","Create new RawMode instance",8,[[["displayproperties"]],["self"]]],[11,"release","","Release all resources used by RawMode",8,[[["self"]],["displayproperties"]]],[11,"new","","Create a new raw display mode",8,[[["displayproperties"]],["self"]]],[0,"terminal","ssd1306::mode","Unbuffered terminal display mode",N,N],[3,"TerminalMode","ssd1306::mode::terminal","Terminal mode handler",N,N],[8,"CharacterBitmap","","A trait to convert from a character to 8x8 bitmap",N,N],[10,"to_bitmap","","Turn input of type T into a displayable 8x8 bitmap",9,N],[11,"to_bitmap","","",10,N],[11,"new","","Create new TerminalMode instance",10,[[["displayproperties"]],["self"]]],[11,"release","","Release all resources used by TerminalMode",10,[[["self"]],["displayproperties"]]],[11,"clear","","Clear the display",10,[[["self"]],["result"]]],[11,"reset","","Reset display",10,[[["self"],["rst"],["delay"]]]],[11,"flush","","Write out data to display. This is a noop in terminal mode.",10,[[["self"]],["result"]]],[11,"print_char","","Print a character to the display",10,[[["self"],["t"]],["result"]]],[11,"init","","Initialise the display in column mode (i.e. a byte walks down a column of 8 pixels) with column 0 on the left and column (display_width - 1) on the right.",10,[[["self"]],["result"]]],[11,"set_rotation","","Set the display rotation",10,[[["self"],["displayrotation"]],["result"]]],[11,"write_str","","",10,[[["self"],["str"]],["result",["error"]]]],[0,"prelude","ssd1306","Crate prelude",N,N],[4,"DisplaySize","ssd1306::prelude","Display size enumeration",N,N],[13,"Display128x64","","128 by 64 pixels",11,N],[13,"Display128x32","","128 by 32 pixels",11,N],[13,"Display96x16","","96 by 16 pixels",11,N],[0,"properties","ssd1306","Container to store and set display properties",N,N],[3,"DisplayProperties","ssd1306::properties","Display properties struct",N,N],[11,"new","","Create new DisplayProperties instance",12,[[["di"],["displaysize"],["displayrotation"]],["displayproperties"]]],[11,"init_column_mode","","Initialise the display in column mode (i.e. a byte walks down a column of 8 pixels) with column 0 on the left and column (display_width - 1) on the right.",12,[[["self"]],["result"]]],[11,"set_draw_area","","Set the position in the framebuffer of the display where any sent data should be drawn. This method can be used for changing the affected area on the screen as well as (re-)setting the start point of the next `draw` call.",12,N],[11,"draw","","Send the data to the display for drawing at the current position in the framebuffer and advance the position accordingly. Cf. `set_draw_area` to modify the affected area by this method.",12,N],[11,"get_size","","Get the configured display size",12,[[["self"]],["displaysize"]]],[11,"get_dimensions","","Get display dimensions, taking into account the current rotation of the display",12,N],[11,"get_rotation","","Get the display rotation",12,[[["self"]],["displayrotation"]]],[11,"set_rotation","","Set the display rotation",12,[[["self"],["displayrotation"]],["result"]]],[11,"try_from","ssd1306::builder","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::displayrotation","",1,[[["u"]],["result"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::prelude","",11,[[["u"]],["result"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"clone","","",11,[[["self"]],["displaysize"]]],[11,"dimensions","","Get integral dimensions from DisplaySize",11,N],[11,"try_from","ssd1306::interface::i2c","",2,[[["u"]],["result"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::interface::spi","",3,[[["u"]],["result"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::mode::displaymode","",5,[[["u"]],["result"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::mode::graphics","",7,[[["u"]],["result"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::mode::raw","",8,[[["u"]],["result"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::mode::terminal","",10,[[["u"]],["result"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"try_from","ssd1306::properties","",12,[[["u"]],["result"]]],[11,"from","","",12,[[["t"]],["t"]]],[11,"try_into","","",12,[[["self"]],["result"]]],[11,"into","","",12,[[["self"]],["u"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"get_type_id","","",12,[[["self"]],["typeid"]]]],"paths":[[3,"Builder"],[4,"DisplayRotation"],[3,"I2cInterface"],[3,"SpiInterface"],[8,"DisplayInterface"],[3,"DisplayMode"],[8,"DisplayModeTrait"],[3,"GraphicsMode"],[3,"RawMode"],[8,"CharacterBitmap"],[3,"TerminalMode"],[4,"DisplaySize"],[3,"DisplayProperties"]]};
searchIndex["void"]={"doc":"Void","items":[[4,"Void","void","The empty type for cases which can't occur.",N,N],[5,"unreachable","","A safe version of `intrinsincs::unreachable`.",N,N],[8,"ResultVoidExt","","Extensions to `Result<T, Void>`",N,N],[10,"void_unwrap","","Get the value out of a wrapper.",0,[[["self"]],["t"]]],[8,"ResultVoidErrExt","","Extensions to `Result<Void, E>`",N,N],[10,"void_unwrap_err","","Get the error out of a wrapper.",1,[[["self"]],["e"]]],[11,"clone","","",2,[[["self"]],["void"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"eq","","",2,[[["self"],["t"]],["bool"]]],[11,"partial_cmp","","",2,[[["self"],["t"]],["option",["ordering"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]]],"paths":[[8,"ResultVoidExt"],[8,"ResultVoidErrExt"],[4,"Void"]]};
initSearch(searchIndex);
