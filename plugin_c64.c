#define CHIPS_IMPL
#include "chips/m6502.h"
#include "chips/m6526.h"
#include "chips/m6569.h"
#include "chips/m6581.h"
#include "chips/beeper.h"
#include "chips/kbd.h"
#include "chips/mem.h"
#include "chips/clk.h"
#include "systems/c64.h"
#include "c64-roms.h"
#include <emscripten.h>

uint32_t framebuffer[392 * 272];
c64_t c64;

c64_desc_t c64_desc() {
    return (c64_desc_t) {
        .pixel_buffer = framebuffer,
        .pixel_buffer_size = sizeof(framebuffer),
        .rom_char = dump_c64_char_bin,
        .rom_char_size = sizeof(dump_c64_char_bin),
        .rom_basic = dump_c64_basic_bin,
        .rom_basic_size = sizeof(dump_c64_basic_bin),
        .rom_kernal = dump_c64_kernalv3_bin,
        .rom_kernal_size = sizeof(dump_c64_kernalv3_bin)
    };
}

EMSCRIPTEN_KEEPALIVE
uint32_t* c64_start(void) {
	c64_desc_t desc = c64_desc();
    c64_init(&c64, &desc);
	return &framebuffer[0];
}

EMSCRIPTEN_KEEPALIVE
void c64_run(void) {
	c64_exec(&c64, 16667); // 16ms
}

EMSCRIPTEN_KEEPALIVE
void c64_key(int key_code) {
    c64_key_down(&c64, key_code);
    c64_key_up(&c64, key_code);
}
